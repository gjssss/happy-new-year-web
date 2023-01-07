# 微信迎新年活动

从微信公众号获取链接，根据用户祝福和用户昵称生成用户专属页面和专属头像

包括用户祝福、祝福图片、随机祝福、评论系统还有分享图片

# TODOs
- [x] 评论
- [ ] 用户祝福
- [ ] 随机祝福
- [ ] 生成图片

# 实现功能
1. 评论
    使用方法：
    ```vue
    <template>
        <UserComment :data="commData" />
    </template>
    <script setup>
        import UserComment from "@/components/UserComment.vue"
        const commData = [{
            id: 1,
            name: 'wff',
            content: "喜悦伴着汗水，成功伴着艰辛，遗憾激励奋斗，我们不知不觉地走进了2023年，在新年来临之际，首先我代表信息中心祝各位新年快乐，万事如意!"
        }, {
            id: 2,
            name: 'gjs',
            content: "短句子"
        }]
    <script>
    ```
