<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Model {

    public function __construct()
    {
        parent::__construct();
    }


	public function index()
	{
		$this->load->view('home_inmo/content', $this->data);
	}
}