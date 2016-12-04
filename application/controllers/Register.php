<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Register extends CI_Controller {

    public function __construct()
    {
        parent::__construct();

        $this->load->model( "register" );
    }


	public function index()
	{
		$this->load->view('home_inmo/register');
	}


	public function register () 
	{


			$return = [];

			if ( $this->input->is_ajax_request() )
			{

				

				 $data = array(

					 	"first_name" => $this->input->post( 'nombre' ),

					 	"last_name" => $this->input->post( 'apellido' ),

					 	"email" => $this->input->post( 'email' ),

					 	"password" => $this->input->post( 'contrasena' ),

					 	"username" => "cliente",



				 	);	



				 $response = $this->register->post( $data );

				 if ( $response )
				 {

				 	$return = [ 'status' => 'SUCCES' , 'message' => 'Se ha registrado exitosamente' , 'data' => $response ];

				 } else {

				 	$return = [ 'status' => 'ERROR' , 'message' => 'Error al registrar los datos. ' , 'data' => $response ];


				 }




			} else {


				 	$return = [ 'status' => 'ERROR' , 'message' => 'Error al recibir los datos. ' , 'data' => $response ];
				

			}

			echo json_encode( $return );



	}


}