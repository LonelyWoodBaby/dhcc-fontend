

const routers = [{
    path: '/test',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/test/testIndex.vue'], resolve)
},{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}
];
export default routers;