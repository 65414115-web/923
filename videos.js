// 视频数据文件
// 🔥 添加新视频：直接在数组开头添加新对象即可（最新的视频会显示在网站最前面）
// 💡 不用担心ID顺序，只要保证每个视频的ID是唯一的就行

const videosData = {
    "videos": [
        {
            "id": 1,
            "order": 1,
            "title": "实测4款AI生图：谁才是真·电商神器？Vidu新功能赢麻了",
            "description": "vidu新出的参考生图功能真的太适合电商行业了，并且上手门槛特别低！体验完我做了一个测评，看看谁才是最适合国内电商行业的ai生图工具！",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=115173490695360&bvid=BV1uNYNzcErU&cid=32266192134&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://xcnoh00euuq7.feishu.cn/wiki/YcckwLX0miCAf8kR97IcQO5Sneh?from=from_copylink",
            "coverUrl": "https://i0.hdslb.com/bfs/archive/59bcfad4045330091b7ba3d99f2a0cf4f4a73f0b.jpg@.avif",
            "bilibiliUrl": "https://www.bilibili.com/video/BV1uNYNzcErU"
        },
        {
            "id": 5,
            "order": 2,
            "title": "2025大学生AI指南：我爆肝3个月测完92款，只推荐这13个神器！【开学第一课】",
            "description": "这期视频制作了好久，终于赶在9月初能发布\n没错过开学季\n全程无广，都是我感觉真正好用的ai工具\n希望能帮助到还在上大学的你\n欢迎把视频转发给身边需要的同学！\n求点赞，求关注！",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?aid=115154750545666&bvid=BV1jcaqzFEYu&cid=32191679319&page=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"> </iframe>",
            "feishuUrl": "https://xcnoh00euuq7.feishu.cn/wiki/Fppaw7IUMi4vjpkfq1jcDUj0nYf?from=from_copylink",
            "coverUrl": "https://i0.hdslb.com/bfs/archive/e739e1684feac6314d449851d6e8d59b06dcd99a.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV1jcaqzFEYu"
        },
        {
            "id": 6,
            "order": 3,
            "title": "Nano Banana全网最全教程！20种玩法+6种免费白嫖方案！",
            "description": "最强ai绘画模型Nano Banana终于发布了！\n给大家出一个详细的教程！\n20种玩法+6个免费白嫖方法\n如果对你有帮助，记得点赞！\n",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=115106532825530&bvid=BV1v9h2zDE7o&cid=32004899879&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>\n",
            "feishuUrl": "https://xcnoh00euuq7.feishu.cn/wiki/W9Bxw50Eni63k8kHUQocjqAbnKc?from=from_copylink",
            "coverUrl": "https://i1.hdslb.com/bfs/archive/d8128d38dac97ae147dc99d598e2971a9b5c12f1.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV1v9h2zDE7o"
        },
        {
            "id": 8,
            "order": 4,
            "title": "我打赌，你不知道一张表格就能「0代码」开发公司系统！",
            "description": "飞书这次的升级，暴露了野心\n多维表格这个产品大有可为\n我觉得未来会跟notion一样，出现很多卖多维表格模板的生意！",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=114862306888299&bvid=BV1PHu4zxEbj&cid=31082678339&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://xcnoh00euuq7.feishu.cn/wiki/HK6LwAs8miPIiqkFRR9cGSnDn7b?from=from_copylink",
            "coverUrl": "https://i1.hdslb.com/bfs/archive/d78d80badc83238eed5fbe099a6281dc2403f49c.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV1PHu4zxEbj"
        },
        {
            "id": 13,
            "order": 5,
            "title": "AI视频新玩法！让马斯克演短剧、拍带货！这个AI神器电商/短剧行业必看！",
            "description": "Vidu他们家新出的Q1多参生视频的功能我觉得是真正可以落地使用的AI\n做电商，做短剧的同学一定要试试看！",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=114816488376397&bvid=BV1XBGnzcEdd&cid=30916874022&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://xcnoh00euuq7.feishu.cn/wiki/RinYwKCPViFaYokI81vcWBRWnPd?fromScene=spaceOverview",
            "coverUrl": "https://i2.hdslb.com/bfs/archive/9d9f79580b378c7d7b3214ea06a960893b5a526c.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV1XBGnzcEdd"
        },
        {
            "id": 10,
            "order": 6,
            "title": "从简历到offer：2025年用AI求职+避坑全攻略",
            "description": "关注我时间长的朋友可能都知道，我本职工作是一家ai公司的业务负责人。\n团队扩张的时候，连着2个月，每天5-6场面试的强度。可以说是资深面试官了\n今天这个视频，我想站在面试官的角度，跟大家聊聊\n如何成为一个面试官喜欢的候选人\n视频有点长\n你的点赞+关注是对我做内容最好的支持！",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=114528876630533&bvid=BV1GuJVzWENP&cid=30025845706&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://xcnoh00euuq7.feishu.cn/wiki/VeN4wRyqbidrTdkAobucu0ipnng?from=from_copylink",
            "coverUrl": "https://i2.hdslb.com/bfs/archive/b8f4c61d7745b48872ce1a07dcd5eb9b53668484.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV1GuJVzWENP"
        },
        {
            "id": 12,
            "order": 7,
            "title": "全网爆火的MCP到底是什么？如何使用MCP？【小白入门教程】",
            "description": "今天聊聊MCP",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=114461616643308&bvid=BV1BnVpz5EBD&cid=29825893158&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://xcnoh00euuq7.feishu.cn/wiki/Qm6LwOoYEii4b5kIyBMcGA2kntg?from=from_copylink",
            "coverUrl": "https://i2.hdslb.com/bfs/archive/0bc14c37889f407ee7eac4d7befaa3b7ac9489b2.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV1BnVpz5EBD"
        },
        {
            "id": 14,
            "order": 8,
            "title": "AI做动画电影最新工作流，效果炸裂！用AI让五条悟大战草帽路飞！保姆级教程",
            "description": "最近，GPT-O3模型，Vidu-Q1模型以及midjourney-V7模型发布以后\n用ai做动画的水平又上升一个层级\n整理了这一期最新的工作流教程\n做内容不易，感谢你的点赞收藏！\n",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=114381673206523&bvid=BV14h5RzDEdn&cid=29554246471&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://iipftulanrc.feishu.cn/docx/XjD5d5H1BoxpXexJfXUcYNdBnSb?from=from_copylink",
            "coverUrl": "https://i1.hdslb.com/bfs/archive/22650737e5c83bb3437531551ed6cb3858097cab.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV14h5RzDEdn"
        },
        {
            "id": 15,
            "order": 9,
            "title": "打工人必看！AI一键生成动态数据图表，这5个技巧，让你效率起飞！",
            "description": "打工人必备的5个AI使用技巧\n一键数据可视化真的太好用了！\n强烈推荐给你！\n感谢你的点赞和关注！",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=114356792598506&bvid=BV1KD5kzJEE8&cid=29554182236&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://iipftulanrc.feishu.cn/docx/DUZRd13CIoUNH0xi6ArcZ5VTn2f?from=from_copylink",
            "coverUrl": "https://i2.hdslb.com/bfs/archive/2bb73339528e1abdc85c795bc590913a80b0c4f1.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV1KD5kzJEE8"
        },
        {
            "id": 16,
            "order": 10,
            "title": "GPT-4o最新玩法，手把手教你做动画电影",
            "description": "来了，GPT-4o别只画图了，用来做影片也是非常方便的！！！\n手把手教你做动画电影！\n感谢你的点赞和关注！",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=114273946703349&bvid=BV1QXZ2YKE7G&cid=29217131933&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://iipftulanrc.feishu.cn/docx/QV6Jd3vxsorhqcx8EPBcXpHUnhd?from=from_copylink",
            "coverUrl": "https://i0.hdslb.com/bfs/archive/3482b21e432c3d4421284b582a02292dfd9601b0.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV1QXZ2YKE7G"
        },
        {
            "id": 17,
            "order": 11,
            "title": "1天1000篇，AI批量做图文笔记，小白无脑起号！（保姆级教程）",
            "description": "用ai批量做图文笔记教程来了！\n学习类图文，养生类图文，成长类图文，都可以！",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=114239318660271&bvid=BV1rdoXYvEeg&cid=29111878795&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://iipftulanrc.feishu.cn/docx/U4PvddDI6ombK8xHTbic8NodnSb?from=from_copylink",
            "coverUrl": "https://i2.hdslb.com/bfs/archive/c9000d1ec268815d921304e44acfddcbab26b3be.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV1rdoXYvEeg"
        },
        {
            "id": 18,
            "order": 12,
            "title": "耗时2个月，我挖出14个DeepSeek隐藏用法！从做笔记到AI音乐全都有，效率飙升！",
            "description": "这期视频，上个月就做了，但因为工作原因，一直没剪完。\n本来有30分钟，后来强行删减到现在。。\n确实太长了\n希望能帮到你们",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=114229906510999&bvid=BV1k9ZPYvEbY&cid=29085535497&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://iipftulanrc.feishu.cn/docx/D9iWdP4ipoPpoFxFTGTcY3y7nSf",
            "coverUrl": "https://i1.hdslb.com/bfs/archive/802b0057861ebbe236cca59e15b4288dfbddfdee.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV1k9ZPYvEbY"
        },
        {
            "id": 19,
            "order": 13,
            "title": "马斯克放大招！Grok3屠榜全球，20万张显卡训练的地表最强AI来了！",
            "description": "马斯克20万张显卡训练出来的号称地表最强ai，grok3终于来了！\n",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=114030526075963&bvid=BV1teAkehEwF&cid=28473822125&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://iipftulanrc.feishu.cn/docx/MXZ7dxdmVopdfnx3zNLcPT0ynge?from=from_copylink",
            "coverUrl": "https://i0.hdslb.com/bfs/archive/0b2437cc1a14f4ae1188678d3106f40d17e90257.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV1teAkehEwF"
        },
        {
            "id": 20,
            "order": 14,
            "title": "必看！DeepSeek从入门到精通！这11个高阶技巧，让你的效率提升10倍",
            "description": "很多同学期待的deepseek新手教程来了！\n这11个技巧，学完新手变大佬！",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=113966973981779&bvid=BV18gNGepE11&cid=28276231475&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://xw8otguvduo.feishu.cn/docx/L2e1dWcpBoXCnbxLJybcWU0pnje",
            "coverUrl": "https://i1.hdslb.com/bfs/archive/8c7435700d9872edb768ff5dfd08e9815adc7a3b.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV18gNGepE11"
        },
        {
            "id": 21,
            "order": 15,
            "title": "最全教程-官网卡顿？4种方法白嫖deepseek满血版！手机、电脑都可（硅基流动+百度+字节白嫖方案）",
            "description": "很多同学部署了本地版本deepseek，发现是个弱智！\n今天，4种方法，教你用上满血版deepseek！\n拒绝卡顿！\n如果觉得对你有帮助，一定请给我点赞三连\n这是对我持续做内容最好的支持！",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=113950096168569&bvid=BV1rBPye8E9w&cid=28224454686&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://xw8otguvduo.feishu.cn/docx/JUw1d6ZdjobTsXx1MG0cB8QonJf?from=from_copylink",
            "coverUrl": "https://i2.hdslb.com/bfs/archive/96d5cdfcfe6788956091241ed50bd1f9efa517b5.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV1rBPye8E9w"
        },
        {
            "id": 22,
            "order": 16,
            "title": "【教程】DeepSeek本地免费部署教程，丝滑不卡顿！带你解锁隐藏功能！",
            "description": "大家新年快乐！！！！\n",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=113910820639135&bvid=BV1viFaeBE3z&cid=28138275900&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://xw8otguvduo.feishu.cn/docx/LqjsdrGgoooyiJxb6IacEp7Bnlq?from=from_copylink",
            "coverUrl": "https://i0.hdslb.com/bfs/archive/7a150f771eb2ceb2f0190d58f05606a0479da12d.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV1viFaeBE3z"
        },
        {
            "id": 23,
            "order": 17,
            "title": "马斯克疯了！旗下AI产品Grok完全免费！不用翻国内直连！（附安装教程）",
            "description": "grok的APP版本终于上架了！\n大家快去试试！\n免费！不用翻！国内网络直连",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=113854868626483&bvid=BV14kw6eWEx5&cid=27959690542&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://iipftulanrc.feishu.cn/docx/JyxPd212ookgEQxuWomcU02cnIc?from=from_copylink",
            "coverUrl": "https://i2.hdslb.com/bfs/archive/e5300e0b0aab8876c470f85248557cd1d52752e3.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV14kw6eWEx5"
        },
        {
            "id": 24,
            "order": 18,
            "title": "耗时1年！我测了上百款AI工具，强推这29个AI神器！2025必看！",
            "description": "过去一年，我从很多工具里，筛出来这29款\n强烈推荐你2025年试试！\n视频里整理的文档在这里\nhttps://iipftulanrc.feishu.cn/sheets/PfgrshFZqhFhnZtel9wc54JTnod\n\n如果对你有帮助，请你帮忙点个赞！这对我很重要！谢谢啦\n",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=113831783177989&bvid=BV1pFczegEnm&cid=27881900625&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://iipftulanrc.feishu.cn/sheets/PfgrshFZqhFhnZtel9wc54JTnod",
            "coverUrl": "https://i0.hdslb.com/bfs/archive/beba2ef4239188593c12d851fa2e4c61e4c9e7be.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV1pFczegEnm"
        },
        {
            "id": 25,
            "order": 19,
            "title": "【白嫖指南】2025新手免费学AI宝藏级资源总结！官方课程免费学，学ai别花钱报课当韭菜！",
            "description": "学ai千万别再被割韭菜了，别花钱！\n这个视频里所有的免费资源都看完，你就是一个ai高手了！\n视频里的所有资料，都整理在这里\n\nhttps://iipftulanrc.feishu.cn/docx/CXzcdOvkIojnVpx6oJJcBIKBnkf\n\n觉得对你有帮助，记得给视频点赞！ 感恩的心！",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=113821851062891&bvid=BV1VvcmeEEQs&cid=27851686371&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://iipftulanrc.feishu.cn/docx/CXzcdOvkIojnVpx6oJJcBIKBnkf",
            "coverUrl": "https://i1.hdslb.com/bfs/archive/221e9c51fa8f0805f1bc6bfbcc9e618715c9fd8f.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV1VvcmeEEQs"
        },
        {
            "id": 26,
            "order": 20,
            "title": "效果炸裂！揭秘小红书AI美女账号做法，保姆级教程！",
            "description": "可灵最新出的2个新功能，简直是王炸！\n画美女太真实了！\n从此，网上刷到的美女，很有可能是AI做的！！！\n如果觉得视频对你有帮助，请给我点个赞，这对我很重要！",
            "embedCode": "<iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=113736673136717&bvid=BV1196hYBEZm&cid=27597669992&p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>",
            "feishuUrl": "https://iipftulanrc.feishu.cn/docx/KjusdfCe2oGIdfxv72Cc7A2lndb?from=from_copylink",
            "coverUrl": "https://i0.hdslb.com/bfs/archive/b0cdea529947287b379b834e4e109bc3796174d3.jpg",
            "bilibiliUrl": "https://www.bilibili.com/video/BV1196hYBEZm"
        }
    ]
};