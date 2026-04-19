 // ═══ JAVASCRIPT ════════════════════════════════════════════════
  
    /* ── Smooth nav ─────────────────────────────────────── */
    function navTo(id) {
      document.getElementById('mobileMenu').classList.remove('open');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    /* ── Mobile menu ────────────────────────────────────── */
    document.getElementById('menuOpen').addEventListener('click', function () {
      document.getElementById('mobileMenu').classList.add('open');
    });
    document.getElementById('menuClose').addEventListener('click', function () {
      document.getElementById('mobileMenu').classList.remove('open');
    });

    /* ── Sticky navbar ──────────────────────────────────── */
    window.addEventListener('scroll', function () {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
    });

    /* ── Scroll-reveal (IntersectionObserver) ───────────── */
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach(function (el) {
      observer.observe(el);
    });

    /* ── Depoimentos slider ─────────────────────────────── */
    var depoimentos = [
      {
        stars: 5,
        text: '"O escritório Ferreira &amp; Novaes resolveu uma disputa societária complexa com competência e agilidade impressionantes. Recomendo sem reservas."',
        name: 'Marcos Oliveira',
        role: 'Empresário'
      },
      {
        stars: 5,
        text: '"Minha aposentadoria estava sendo negada há dois anos. Em seis meses, a equipe conseguiu a aprovação integral. Profissionais excepcionais."',
        name: 'Ana Cristina Lima',
        role: 'Servidora Pública'
      },
      {
        stars: 5,
        text: '"Assessoria jurídica empresarial de altíssimo nível. Trataram nosso caso com discrição e eficiência que superaram todas as expectativas."',
        name: 'Roberto Teixeira',
        role: 'Diretor Comercial'
      }
    ];

    let currentSlide = 0;

    function goSlide(n) {
      currentSlide = n;
      let d = depoimentos[n];
      document.getElementById('depStars').textContent = '★'.repeat(d.stars);
      document.getElementById('depText').innerHTML = d.text;
      document.getElementById('depName').textContent = d.name;
      document.getElementById('depRole').textContent = d.role;
      document.querySelectorAll('.dep-dot').forEach(function (dot, i) {
        dot.classList.toggle('active', i === n);
      });
    }

    /* Auto-advance slider every 5s */
    setInterval(function () {
      goSlide((currentSlide + 1) % depoimentos.length);
    }, 5000);

    /* ── Contact form ───────────────────────────────────── */
    document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();
      this.style.display = 'none';
      document.getElementById('successBox').style.display = 'block';
    });