const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000; // 在 Vercel 上使用 process.env.PORT

// 中间件
app.use(cors());
app.use(express.json());

// 关键步骤：告诉 Express 服务 public 文件夹里的所有静态文件
// Vercel 部署后，它会自动把这些文件提供给浏览器
app.use(express.static(path.join(__dirname, 'public')));

// 读取视频数据 (保持不变)
app.get('/api/videos', (req, res) => {
    try {
        const videosPath = path.join(__dirname, 'public', 'videos.js'); // 注意路径已修改
        const videosContent = fs.readFileSync(videosPath, 'utf8');

        // 提取 videosData 对象
        const match = videosContent.match(/const videosData = ({[\s\S]*?});/);
        if (match) {
            const videosData = eval('(' + match[1] + ')');
            res.json(videosData);
        } else {
            res.status(500).json({ error: '无法解析视频数据' });
        }
    } catch (error) {
        res.status(500).json({ error: '读取视频数据失败' });
    }
});

// 保存视频数据 (保持不变)
app.post('/api/videos', (req, res) => {
    try {
        const videosData = req.body;

        // 生成新的 videos.js 内容
        const jsContent = `// 视频数据文件
// 🔥 添加新视频：直接在数组开头添加新对象即可（最新的视频会显示在网站最前面）
// 💡 不用担心ID顺序，只要保证每个视频的ID是唯一的就行

const videosData = ${JSON.stringify(videosData, null, 4)};`;

        // 写入文件
        const videosPath = path.join(__dirname, 'public', 'videos.js'); // 注意路径已修改
        fs.writeFileSync(videosPath, jsContent, 'utf8');

        res.json({ success: true, message: '视频数据保存成功' });
    } catch (error) {
        res.status(500).json({ error: '保存视频数据失败', details: error.message });
    }
});

// 图片代理接口（解决B站防盗链问题）
app.get('/proxy-image/:encodedUrl', async (req, res) => {
    try {
        const imageUrl = decodeURIComponent(req.params.encodedUrl);

        // 使用fetch或http请求获取图片
        const https = require('https');
        const http = require('http');

        const protocol = imageUrl.startsWith('https') ? https : http;

        protocol.get(imageUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Referer': 'https://www.bilibili.com/'
            }
        }, (proxyRes) => {
            res.setHeader('Content-Type', proxyRes.headers['content-type']);
            res.setHeader('Cache-Control', 'public, max-age=86400'); // 缓存1天
            proxyRes.pipe(res);
        }).on('error', (err) => {
            console.error('图片代理错误:', err);
            res.status(500).send('图片加载失败');
        });
    } catch (error) {
        console.error('图片代理错误:', error);
        res.status(500).send('图片加载失败');
    }
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
    console.log('后台管理地址: http://localhost:3000/admin.html');
});