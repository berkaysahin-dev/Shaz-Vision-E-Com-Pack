document.querySelectorAll('.button--tertiary').forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        // Get the line number from the parent element's data-index attribute
        var lineNumber = button.closest('cart-remove-button').getAttribute('data-index');

        console.log('Removing line item:', lineNumber);

        fetch('/cart/change.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify({
                line: parseInt(lineNumber),  // Use the line number from the data-index attribute
                quantity: 0                   // Remove the item
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Cart updated:', data);

            // Update cart total and item count
            var cartTotal = document.querySelector('.cart-total');
            var cartItemCount = document.querySelector('.cart-item-count');

            if (cartTotal) {
                cartTotal.innerText = `$${(data.total_price / 100).toFixed(2)}`;
            }

            if (cartItemCount) {
                cartItemCount.innerText = data.item_count;
            }

            // Remove the entire cart item from the DOM
            // Target the closest cart item container that includes the image, description, etc.
            var cartItem = button.closest('.cart-item'); // Change this selector if needed

            if (cartItem) {
                cartItem.remove();  // Remove the entire cart item element
            }

            // Optional: Display message if the cart is empty
            if (data.item_count === 0) {
                document.querySelector('.cart-contents').innerHTML = '<p>Your cart is empty.</p>';
            }
        })
        .catch(error => {
            console.error('Error removing item:', error);
        });
    });
});









document.querySelectorAll('.button--tertiary').forEach(function(button, index) {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        var lineNumber = index + 1;

        fetch('/cart/change.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify({
                line: lineNumber,
                quantity: 0
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Cart updated:', data);

            // Update the cart total in the cart page
            var cartTotal = document.querySelector('.cart-total');
            var cartItemCount = document.querySelector('.cart-item-count');

            if (cartTotal) {
                cartTotal.innerText = `$${(data.total_price / 100).toFixed(2)}`;
            }

            if (cartItemCount) {
                cartItemCount.innerText = data.item_count;
            }

            // Update the header cart count bubble
            var headerCartCount = document.querySelector('#cart-icon-bubble .cart-count-bubble span[aria-hidden="true"]');

            if (headerCartCount) {
                headerCartCount.innerText = data.item_count;

                // Optionally hide the bubble if there are no items left
                var headerCartBubble = document.querySelector('#cart-icon-bubble .cart-count-bubble');
                if (data.item_count === 0 && headerCartBubble) {
                    headerCartBubble.style.display = 'none';
                } else {
                    headerCartBubble.style.display = 'block';
                }
            }

            // Optionally, remove the item from the DOM if there are no more items
            if (data.item_count === 0) {
                button.closest('.cart-item').remove();
            }
        })
        .catch(error => {
            console.error('Error removing item:', error);
        });
    });
});
