var should = require('should');
const axios = require('axios');

asyncFunc = time => new Promise( r => setTimeout( r, time ))

describe('基础语法', ( ) => {

    it('should.js语法(BBD)', ( ) => {
        [ 1, 2, 3 ].indexOf( 4 ).should.equal( -1 );
    });

    it('回调异步，done', done => {
        done( );
    });

    it('async异步，非done', async ( ) => {
        await asyncFunc( 100 );
    });
});

describe('mocha钩子', ( ) => {

    before(( ) => console.log(`测试开始啦`))

    after(( ) => console.log(`测试结束开始啦`))

    beforeEach(( ) => console.log(`某个任务开始啦`))

    afterEach(( ) => console.log(`某个任务结束啦`))

    it('测试1', ( ) => {
        [ 1, 2, 3 ].indexOf( 4 ).should.equal( -1 );
    });

    it('测试2', ( ) => {
        [ 1, 2, 3 ].indexOf( 1 ).should.equal( 0 );
    });
})

describe('mocha钩子-异步', ( ) => {

    before( done => {
        setTimeout( done, 1000 )
    })

    it('测试1', async ( ) => {
    });
})

describe('超时', function( ) {

    // this.timeout( 0 ); // 非超时模式
    this.timeout( 280 );
  
    it('这个任务要500ms', function( done ) {
        setTimeout( done, 300 );
    });
  
    it('这个任务要250ms', function( done ) {
        setTimeout( done, 250 );
    });
})

describe('http', ( ) => {

    it('请求百度', async ( ) => {
        // setTimeout( done, 300 );
        const a = await axios.get(`http://www.baidu.com`);
        a.data.should.be.a.String()
    });
})