import './footer.css';

export default function Footer() {
  return (
    <footer class="page-footer" id="footer">
      <div class="social">   
        <a href="https://www.linkedin.com/in/mateus-almeida-silva-7a5563b8/" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-linkedin" id="icon-linkedin"></i></a>
        <a href="https://github.com/Mateeus10" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-github" id="icon-github"></i></a>
        <a href="https://api.whatsapp.com/send?phone=5511963456169" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-whatsapp" id="icon-whatsapp"></i></a>
      </div>
      <div class="copyright">
       <p>Mateus Almeida 2022 ©</p>
      </div>
    </footer>
  );
}