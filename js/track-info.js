function getData() {
    try {
      const docs = sessionStorage.getItem('doc');
  
      const doc = JSON.parse(docs);
      const data = doc.data


  
    //   document.getElementById('track-input').value = data.trackNumber;
      document.getElementById('tr_code').textContent = data.trackNumber;
      document.getElementById('shippername').textContent = data.shipperName;
      document.getElementById('shipperemail').textContent = data.shipperEmail;
      document.getElementById('shipperadd').textContent = data.shipperAdd;
      document.getElementById('shippertel').textContent = data.shipperTel
      document.getElementById('recname').textContent = data.recieverName;
      document.getElementById('recemail').textContent = data.recieverEmail;
      document.getElementById('recadd').textContent = data.recieverAdd;
      document.getElementById('rectel').textContent = data.recieverTel;
      document.getElementById('origin').textContent = data.origin;
      // document.getElementById('shiptype').textContent = data.packageType;
      // document.getElementById('status').textContent = data.shipStatus;
      document.getElementById('dest').textContent = data.dest;
      const currDest = data.currDest;
      // document.getElementById('shipment').textContent = data.shipType;
      // document.getElementById('weight').textContent = `${data.wght}Kg`;
      // document.getElementById('pay').textContent = data.payMode;
      document.getElementById('edd').textContent = data.deliveryDate;
      // document.getElementById('dt').textContent = data.departureTime;
      // document.getElementById('pd').textContent = data.pickupDate;
      // document.getElementById('pt').textContent = data.pickupTime;
      // document.getElementById('comment').textContent = data.comment;

      const iframe = document.getElementById("mapId");
      console.log(iframe.src); // Logs the src URL
      iframe.src = `https://maps.google.com/maps?q=${currDest}&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed`
  
      // const hdBg = document.getElementById('result-status-header')
  
      // if (data.shipStatus === 'held') {
      //   hdBg.style.backgroundColor = 'red'
      //   hdBg.style.fontWeight = 900
      //   return hdBg.textContent = 'ON HOLD';
      // }
  
      // hdBg.style.backgroundColor = 'green'
      // hdBg.style.fontWeight = 900
      // return hdBg.textContent = 'IN TRANSIT';
    } catch (error) {
      console.log(error);
    }
  }
  
  getData();