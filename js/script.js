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

// 产品详情模态框
const productCards = document.querySelectorAll('.product-card');
const modal = document.getElementById('product-modal');
const closeBtn = document.querySelector('.close-modal');
const modalContent = document.querySelector('.modal-content');

productCards.forEach(card => {
    card.addEventListener('click', () => {
        const productType = card.getAttribute('data-product-type');
        openProductModal(productType);
    });
});

function openProductModal(productType) {
    const details = document.getElementById(`${productType}-details`);
    if (details) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // 隐藏所有产品详情
        document.querySelectorAll('.product-details').forEach(detail => {
            detail.style.display = 'none';
        });
        
        // 显示选中的产品详情
        details.style.display = 'block';
        
        // 添加动画效果
        modalContent.classList.add('modal-open');
    }
}

// 关闭模态框
function closeModal() {
    modalContent.classList.remove('modal-open');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

closeBtn.addEventListener('click', closeModal);

// 点击模态框外部关闭
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC键关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});
