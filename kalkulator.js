function insert(num){
    document.form.textview.value = 
    document.form.textview.value + num;
}

function clean(){
    document.form.textview.value = '';
}

function result(){
    var exp = document.form.textview.value;
    if (exp){
        document.form.textview.value = eval(exp);
    }
}