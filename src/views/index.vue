<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 40%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .index .ivu-row-flex {
        height: 100%;
    }
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h1>
                    <img src="../images/rzzl_logo.png">
                </h1>
                <h2>
                    <p>欢迎进入前端开发环境0.1-Beta!</p>
                    <Button type="ghost" @click="handleStart">Start Your Develop！</Button>
                    <div style="margin-top:20px"><router-link to="/test">进入模板展示界面</router-link></div>
                </h2>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: '现在准备开始做您的开发吧'
                });
            }
        }
    };
</script>