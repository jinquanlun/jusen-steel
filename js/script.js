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

// 文字动画
document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.text-slide');
    if (text) {
        text.style.opacity = '1';
        text.style.transform = 'translateY(0)';
    }
});

// 产品详情模态框功能
function openProductModal(productType) {
    const modal = document.getElementById('productModal');
    if (!modal) return;

    // 隐藏所有详情
    const allDetails = document.querySelectorAll('.product-details');
    allDetails.forEach(detail => detail.style.display = 'none');
    
    // 显示对应产品的详情
    const targetDetails = document.getElementById(`${productType}-details`);
    if (targetDetails) {
        targetDetails.style.display = 'block';
    }
    
    // 显示模态框
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('productModal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// 初始化事件监听
document.addEventListener('DOMContentLoaded', function() {
    // 为所有产品卡片添加点击事件
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productType = this.getAttribute('data-product-type');
            if (productType) {
                openProductModal(productType);
            }
        });
    });

    // 关闭按钮事件
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();
        });
    }

    // 点击模态框外部关闭
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }
});

// ESC 键关闭模态框
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
