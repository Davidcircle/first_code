// scripts.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name.trim() === '' || email.trim() === '') {
        alert('请填写所有字段！');
    } else {
        alert('表单已提交!');
        // 清空表单
        document.getElementById('contact-form').reset();
    }
});