// 登录模态框交互
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const loginBtn = document.getElementById('login-btn');
    const modal = document.getElementById('login-modal');
    const closeBtn = document.querySelector('.close');
    const loginForm = document.getElementById('login-form');

    // 打开登录模态框
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    });

    // 关闭登录模态框
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // 恢复背景滚动
    });

    // 点击模态框外部关闭
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // 表单提交处理
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // 获取表单数据
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const remember = document.querySelector('input[name="remember"]').checked;

        // 这里可以添加实际的登录逻辑
        console.log('登录信息:', { username, password, remember });

        // 模拟登录成功
        alert('登录成功!');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';

        // 更新登录按钮为用户名
        loginBtn.textContent = username;
        loginBtn.removeEventListener('click', arguments.callee);
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // 这里可以添加用户菜单或退出登录功能
            alert('用户菜单功能待实现');
        });
    });

    // 忘记密码链接处理
    document.querySelector('.forgot-password').addEventListener('click', function(e) {
        e.preventDefault();
        alert('密码重置功能待实现');
    });

    // 注册链接处理
    document.querySelector('.signup-link a').addEventListener('click', function(e) {
        e.preventDefault();
        alert('注册功能待实现');
    });
});
