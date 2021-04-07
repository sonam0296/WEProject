import React from 'react';
import { useEffect } from 'react';
import $ from 'jquery'
// import isotope from 'isotope';
 
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout'); 

const PortFolioBody = () =>{

    useEffect(()=>{
        // external js: isotope.pkgd.js


// init Isotope
jQueryBridget( 'isotope', Isotope, $ );
var $grid = $('.container').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });
  
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  
  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  
  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
  });
  
    
  
    })

    return(
        <>
        <div>
  {/* Dont remove id filters */}
  <div id="filters" className="container-fluid mb-5 mt-5" style={{marginLeft:"200px", paddingLeft:"50px"}}>  
    <button className="btn btn-outline-primary mr-50" aria-pressed="true" data-filter="*" >ALL</button>
    <button className="btn btn-outline-primary mr-50" data-filter=".design">Web Design</button>
    <button className="btn btn-outline-primary mr-50" data-filter=".webdesign">Web Development</button>
    <button className="btn btn-outline-primary mr-50" data-filter=".logotipos">Customization</button>
    <button className="btn btn-outline-primary mr-50" data-filter=".videomaker">Mobile Development</button>
  </div>
  {/*  Dont remove class grid */}
  <div className="grid"> 
    <div className="container">{/*  Dont remove class container */}
      {/*  use the data-category always together in the class  */}
      <div className="element-item design" data-category="design">
        <img src="https://cdn04.masterstudies.com/gfx/image/listing-page/80/main/Estudos-de-Design.jpg" className="w-100 h-100 " width="200px" height="200px" style={{marginLeft:"0px"}} />
      </div>
      <div className="element-item webdesign" data-category="webdesign">
        <img src="http://www.sirenconsultingfirm.com/wp-content/uploads/2014/11/responsive-web-design-300x200.jpg" className="w-100 h-100 " width="200px" height="200px" style={{marginLeft:"50px"}} />
        
      </div>
      <div className="element-item videomaker" data-category="videomaker">
        <img src="http://iphotochannel.com.br/wp-content/uploads/2017/08/iphoto-surfaceone-300x200.jpg" className="w-100 h-100 " width="200px" height="200px" style={{marginLeft:"100px", }} />
      </div>
      <div className="element-item webdesign" data-category="webdesign">
        <img src="http://www.sirenconsultingfirm.com/wp-content/uploads/2014/11/responsive-web-design-300x200.jpg" className="w-100 h-100 " width="200px" height="200px" style={{marginLeft:"100px", marginTop:"50px"}} />
      </div>
      <div className="element-item videomaker" data-category="videomaker">
        <img src="https://designersbrasileiros.com.br/wp-content/uploads/2017/10/logotipos-com-mensagens-ocultas-300x200.png" className="w-100 h-100 " width="200px" height="200px" style={{marginLeft:"120px" , marginTop:"50px"}} />
      </div>
      <div className="element-item logotipos" data-category="logotipos">
        <img src="assets/img/img3.jpg" className="" width="400px" height="300px" style={{marginLeft:"100px" , marginTop:"50px"}} />
      </div>
      <div className="element-item logotipos" data-category="logotipos">
        <img src="assets/img/img4.jpg" className="" width="400px" height="300px" style={{marginLeft:"20px" , marginTop:"50px"}} />
      </div>
     

    </div>
  </div>
</div>

        </>
    )
}

export default PortFolioBody