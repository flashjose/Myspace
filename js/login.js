document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;
        
        // 简单的前端验证
        if (!username || !password) {
            showMessage('请输入用户名和密码', 'error');
            return;
        }
        
        // 创建FormData对象
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('remember', remember);
        
        // 发送AJAX请求
        fetch('api/login', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('登录请求失败');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                showMessage('登录成功，正在跳转...', 'success');
                
                // 如果选择了记住我，将用户信息存储在localStorage中
                if (remember) {
                    localStorage.setItem('username', username);
                } else {
                    localStorage.removeItem('username');
                }
                
                // 存储登录令牌
                localStorage.setItem('token', data.token);
                
                // 延迟跳转，让用户看到成功消息
                setTimeout(() => {
                    window.location.href = 'space-exploration.html';
                }, 1500);
            } else {
                showMessage(data.message || '登录失败，请检查用户名和密码', 'error');
            }
        })
        .catch(error => {
            console.error('登录错误:', error);
            showMessage('登录过程中发生错误，请稍后再试', 'error');
        });
    });
    
    // 页面加载时，检查是否有记住的用户名
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
        document.getElementById('remember').checked = true;
    }
    
    // 显示消息函数
    function showMessage(text, type) {
        loginMessage.textContent = text;
        loginMessage.className = 'message ' + type;
        loginMessage.style.display = 'block';
        
        // 5秒后自动隐藏消息
        setTimeout(() => {
            loginMessage.style.display = 'none';
        }, 5000);
    }
});