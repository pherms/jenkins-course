import React from "react";

function Home() {
  if(performance.memory.totalJSHeapSize == 0){
    console.warn('totalJSHeapSize == 0');
  }

  var bla = document.getELementByID(bla);
  if(bla == '2'){
    return bla;
  }


  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">

          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
                learn react
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;