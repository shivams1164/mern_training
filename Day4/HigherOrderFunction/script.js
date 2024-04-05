function sum(a, b, fun) {

    // return a+b;

    const ans = a + b;
    fun(ans);
}

function print(x) {
    console.log('    *****', x, '****');

}

// const ans=sum(3,4);
// print(ans);

sum(3, 4, print)
