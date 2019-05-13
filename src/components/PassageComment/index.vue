<template>
  <div>
    <Item
      v-for="item in commentList"
      :key="item.commentID"
      :content="item.content"
      :commentID="item.commentID"
      :email="item.user.email"
      :nickname="item.user.nickname"
      :femail="item.fatherUser.email"
      :fnickname="item.fatherUser.nickname"
      :hasFather="item.fatherCommentID !== 0"
      :time="item.time"
    ></Item>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  name: "PassageComment",
  components: { Item },
  data() {
    return {
      commentList: [
        {
          passageID: "001",
          commentID: 1,
          fatherCommentID: 0,
          user: {
            email: "1111@qq.cm",
            nickname: "小红"
          },
          fatherUser: {
            email: "xxx",
            nickname: "xxx"
          },
          content:
            "谁都不顿肤色如部分热量和规范不是简单方便家里人办法部分蓝色人逼疯了人分别是离开的不服输腹背受敌老人服可是大润发世界的方式软件部分",
          time: "2019-01-01"
        },
        {
          passageID: "001",
          commentID: 2,
          fatherCommentID: 2,
          user: {
            email: "222@qq.com",
            nickname: "小明"
          },
          fatherUser: {
            email: "333@qq.com",
            nickname: "小红"
          },
          content: "啦啦啦啦啦啦啦绅士手当地丰富四川省地方",
          time: "2018-02-09"
        },
        {
          passageID: "001",
          commentID: 2,
          fatherCommentID: 4,
          user: {
            email: "222@qq.com",
            nickname: "小明"
          },
          fatherUser: {
            email: "333@qq.com",
            nickname: "小红"
          },
          content:
            "啦啦啦啦啦啦啦低筋粉 i 里度过黑色 i 如果本来部分是路人粉绅士手当地丰富四川省地方",
          time: "2018-02-09"
        },
        {
          passageID: "001",
          commentID: 2,
          fatherCommentID: 0,
          user: {
            email: "222@qq.com",
            nickname: "小明"
          },
          fatherUser: {
            email: "333@qq.com",
            nickname: "小红"
          },
          content:
            "啦啦啦啦啦啦啦绅士我当机立断我国日是，的毫不费力虽然很烦手当地丰富四川省地方",
          time: "2018-02-09"
        }
      ]
    };
  },
  props: {},
  methods: {}
};
</script>

<style>
</style>
