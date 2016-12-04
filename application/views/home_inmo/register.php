<?php  $this->load->view( 'home_inmo/head' );   ?>

<form class="form-horizontal  frm_register" method="POST">
<fieldset>

<!-- Form Name -->
<legend>Registro</legend>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="nombre">Nombre</label>  
  <div class="col-md-4">
  <input id="nombre" name="nombre" type="text" placeholder="" class="form-control input-md" required="">
    
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="apellido">Apellido</label>  
  <div class="col-md-4">
  <input id="apellido" name="apellido" type="text" placeholder="" class="form-control input-md" required="">
    
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="mail1">Correo Electronico</label>  
  <div class="col-md-4">
  <input id="mail1" name="email" type="text" placeholder="" class="form-control input-md" required="">
    
  </div>
</div>



<!-- Password input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="contra">Contraseña</label>
  <div class="col-md-4">
    <input id="contrasena" name="contrasena" type="password" placeholder="" class="form-control input-md" required="">
    
  </div>
</div>

<!-- Password input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="contra2">Confirme Contraseña</label>
  <div class="col-md-4">
    <input id="confirmar_contrasena" name="confirmar_contrasena" type="password" placeholder="" class="form-control input-md" required="">
    
  </div>
</div>

<!-- Button -->
<div class="form-group">
  <label class="col-md-4 control-label" for="registrar"></label>
  <div class="col-md-4">
    <button  type="submit" class="btn btn-primary">Registrar</button>
  </div>
</div>

</fieldset>
</form>

<?php  $this->load->view( 'home_inmo/footer' ); ?>
<script type="text/javascript">
  

var BASE_URL = "<?= base_url(); ?>"

</script>
<script type="text/javascript" src="<?= base_url(); ?>assets/js/registro/register.js"></script>

















