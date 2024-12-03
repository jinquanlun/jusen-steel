// 导航栏滚动效果
document.addEventListener('DOMContentLoaded', function() {
    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 产品详情模态框功能
function openProductModal(productType) {
    const modal = document.getElementById("productModal");
    const allDetails = document.querySelectorAll('.product-details');
    
    // 隐藏所有产品详情
    allDetails.forEach(detail => {
        detail.style.display = 'none';
    });
    
    // 显示选中的产品详情
    const selectedDetail = document.getElementById(productType + "-details");
    if (selectedDetail) {
        selectedDetail.style.display = 'block';
    }
    
    // 显示模态框
    modal.style.display = "block";
}

// 关闭模态框
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("productModal");
    const closeBtn = document.querySelector(".close-modal");
    
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }
    
    // 点击模态框外部关闭
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    // 为所有产品卡片添加点击事件
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.onclick = function() {
            const productType = this.getAttribute('data-product-type');
            if (productType) {
                openProductModal(productType);
            }
        }
    });
});
