// 移动端菜单控制

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const navLeft = document.querySelector(".nav-left");
    const navRight = document.querySelector(".nav-right");
    let isNavOpen = false;
    let activeNav = null;
    
    // 菜单切换按钮点击事件
    menuToggle.addEventListener("click", function() {
        if (isNavOpen && activeNav) {
            // 关闭当前打开的菜单
            activeNav.classList.remove("active");
            menuToggle.innerHTML = "☰";
            isNavOpen = false;
            activeNav = null;
        } else {
            // 默认打开右导航菜单
            navRight.classList.add("active");
            menuToggle.innerHTML = "✕";
            isNavOpen = true;
            activeNav = navRight;
        }
    });
    
    // 点击导航链接后关闭菜单
    const navLinks = document.querySelectorAll(".nav-left ul li a, .nav-right ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            if (isNavOpen && activeNav) {
                activeNav.classList.remove("active");
                menuToggle.innerHTML = "☰";
                isNavOpen = false;
                activeNav = null;
            }
        });
    });
    
    // 点击菜单外部区域关闭菜单
    document.addEventListener("click", function(event) {
        const isClickInsideNavLeft = navLeft.contains(event.target);
        const isClickInsideNavRight = navRight.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideNavLeft && !isClickInsideNavRight && !isClickOnToggle && isNavOpen && activeNav) {
            activeNav.classList.remove("active");
            menuToggle.innerHTML = "☰";
            isNavOpen = false;
            activeNav = null;
        }
    });
});