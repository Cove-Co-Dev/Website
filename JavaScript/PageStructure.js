function createNav()
{
  document.write
  (`
    <h5 style="font-weight: normal;">
      <ul class="nav justify-content-start" style="position: absolute;">
        <li class="nav-item">
          <a class="nav-link active" style="color: black;" aria-current="page" href="index">Cove Co.</a>
        </li>
      </ul>

      <ul class="nav justify-content-end">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" style="color: black;" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Connect</a>
          <div class="dropdown-menu">
            <h5>
            <a class="dropdown-item" href="mailto:coveco.contact@gmail.com" style="display: flex; align-items: center">
              <img src="https://img.icons8.com/fluency-systems-filled/144/000000/ms-outlook.png" style="width: 20%;"/>
              &nbsp;&nbsp;Email
            </a>
            <a class="dropdown-item" href="https://github.com/Cove-Co-Dev" target="_blank" style="display: flex; align-items: center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" style="width: 20%;"/>
              &nbsp;&nbsp;GitHub
            </a>
            </h5>
          </div>
        </li>
      </ul>
    </h5>

    <br><br><br><br>
  `);
}

function createFooter()
{
  document.write
  (`
    <br><br><br><br><br>

    <footer>
      <h5 style="text-align: right; padding: 5%;">
        Cove Co.
        <br>
        Designed and developed by Samuel Allen and Milan Marocchi
        <br>
        <a href="#" class="link-dark" target=”_blank”>
          info
        </a>
      </h5>
    </footer>
  `);
}
