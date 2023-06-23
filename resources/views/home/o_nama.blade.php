<!DOCTYPE html>
<html>
   <head>

    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <link rel="shortcut icon" href="{{asset('images/favicon.png')}}" type="">
    <title>Projekt</title>

    <link rel="stylesheet" type="text/css" href="{{asset('home/css/bootstrap.css')}}" />

    <link href="{{asset('home/css/font-awesome.min.css')}}" rel="stylesheet" />

    <link href="{{asset('home/css/style.css')}}" rel="stylesheet" />

    <link href="{{asset('home/css/responsive.css')}}" rel="stylesheet" />

   </head>
<body>

@include ('home.header')


<div style="background-color: rgb(207, 202, 202)">
<section class="client_section layout_padding">
    <div class="container">
       <div id="onama" class="heading_container heading_center">
          <h2>
             O nama
          </h2>
          <div>
           Lugara je projektni zadatak kolegija razvoj web aplikacija.
            <div class="w-100"></div>
            Cilj jeste napraviti web okruženje gdje je lako pristupiti i obaviti kupovinu raznih duhanskih proizvoda.
            <div class="w-100"></div>
            Tehnologije korištene za izradu aplikacije uključuju: HTML, CSS, JS i JQuery, Bootstrap, Laravel, MySql, phpmyadmin, Blade te php.
          </div>
       </div>

                <div class="box col-lg-10 mx-auto">

                   <div class="detail-box">
                      <h5>
                         Marko Brekalo
                      </h5>
                      <h6>
                         <strong>Backend developer</strong>
                      </h6>

                   </div>
                </div>
             </div>

                <div class="box col-lg-10 mx-auto">

                   <div class="detail-box">
                      <h5>
                         Drago Kulaš
                      </h5>
                      <h6>
                        <strong>Frontend developer</strong>
                      </h6>



       </div>
    </div>
 </section>
 @include('home.footer')
</div>
<script src="{{asset('home/js/jquery-3.4.1.min.js')}}"></script>

         <script src="{{asset('home/js/popper.min.js')}}"></script>

         <script src="{{asset('home/js/bootstrap.js')}}"></script>

         <script src="{{asset('home/js/custom.js')}}"></script>
</body>
</html>
