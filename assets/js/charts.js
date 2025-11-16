body {
    height: 100vh;
    font-family: Roboto;
    /* Generated with http://gradient.quasi.ink */
    background-size: cover;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAABOElEQVQoUwXByS4DYQDA8f83M612LB0hUmmQ2uJgjwMhtTTpoZa7u5sXkCBxEAd38QK8gbh6AImEcCFEtdHN1s5MZ7RjPr+fiO0eymCpiqV71Ke6aFErpKdnucw+4/55+JkiYnxrT3p2Ba+7jXJvkCWhsdkzzWHhhlfHQnU9xOTitjQNHzVi4Psuyc4oy00DHNu3fLo2wXAIcXJ6IZ9KOTJvJuX8D4t6B91WjLPAI45eIVC1EKn0jhwa7CIcbuf1+oMJV6GztZ9zeUPZ/KYpBCKxtC+9moOi+bQFNOasOMPxPvSNCC/ZPFfX94jkyoEUvo0aCCHNOmv2KAXX5M7IMJMYI9pjINZTB9JuWCioNDsw/xPjPaTwoH/x6wsaooRYXTiSNbWKQp2I02DEjZPTBCWjgdQkjlrkH5utgsaGyJlxAAAAAElFTkSuQmCC");
  }
  
  a {
    color: rgba(255, 255, 255, 0.6);
    font-size:18px;
    float: right;
    margin: 25px;
    -webkit-transition: color 1s ease-out;
    -moz-transition: color 1s ease-out;
    -o-transition: color 1s ease-out;
    transition: color 1s ease-out;
  }
  
  a:hover {
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
  }
  
  .showcase {
    display: inline-block;
    margin-top: 100px;
  }
  
  .statbox {
    display: inline-block;
    border: 0;
    width: 20vw;
    height: 9vw;
    background-color: #424242;
    /*default bg colour*/
    color: #BDBDBD;
    /*default font colour*/
    margin-left: 4vw;
    margin-top: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  
  .statReading {
    z-index: 9!important;
    float: right;
    font-weight: 400;
    font-size: 3.2vw;
    margin-right: 15px;
    text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
  
  .labelReading {
    z-index: 5;
    position: absolute;
    float: left;
    bottom: 15px;
    margin-left: 15px;
    font-weight: 200;
    font-size: 1.4vw;
  }
  
  canvas {
    position: absolute;
    z-index: 0;
  }
  
  .chartContainer {
    position: absolute;
    width: inherit;
    height: 5vw;
    z-index: 5;
    margin-top: 4vw;
  }
  
  
  /*Colours*/
  
  .statMeter {
    background-color: #2ecc71;
    color: rgba(255, 255, 255, 1);
  }
  
  .statNG {
    background-color: #34495e;
    color: rgba(255, 255, 255, 1);
  }
  
  .statHDD {
    background-color: #e74c3c;
    color: rgba(255, 255, 255, 1);
  }
  
  .statCDD {
    background-color: #1abc9c;
    color: rgba(255, 255, 255, 1);
  }