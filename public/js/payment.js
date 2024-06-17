document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var paymentMethod = document.getElementById('paymentMethod').value;
  
    if (paymentMethod === 'creditCard') {
      // Validate credit card fields
      var cardNumber = document.getElementById('cardNumber').value;
      var expDate = document.getElementById('expDate').value;
      var cvv = document.getElementById('cvv').value;
      var billingAddress = document.getElementById('billingAddress').value;
  
      // Perform validation for credit card fields
  
      alert('Payment successful!');
    } else if (paymentMethod === 'netBanking') {
      // Validate net banking fields
      var selectedBank = document.getElementById('bank').value;
  
      if (selectedBank === '') {
        alert('Please select your bank.');
        return;
      }
  
      alert('Payment successful! Redirecting to ' + selectedBank + '...');
      // You can redirect the user to the selected bank's website for net banking.
    }
  });
  
  document.getElementById('paymentMethod').addEventListener('change', function() {
    var paymentMethod = this.value;
    if (paymentMethod === 'netBanking') {
      document.getElementById('netBankingFields').style.display = 'block';
    } else {
      document.getElementById('netBankingFields').style.display = 'none';
    }
  });
  
  