<section class="product_section layout_padding">
    <div class="container">
       <div class="heading_container heading_center">
          <h2>
             Popularne <span> kategorije</span>
          </h2>
       </div>
       <div class="row">
         @foreach($artikal as $artikal)
          <div class="col-sm-6 col-md-4 col-lg-4">
             <div class="box">
                <div class="option_container">
                   <div class="options">
                      <a href="{{url('filter_produkti', $artikal->kategorija)}}" class="option1">
                      Pogledaj
                      </a>
                   </div>
                </div>
                <div class="img-box">
                   <img src="/artikal/{{$artikal->slika}}" alt="">
                </div>
                <div class="detail-box">
                   <h5>
                      {{$artikal->kategorija}}
                   </h5>

                </div>
             </div>
          </div>
         @endforeach

    </div>
 </section>
