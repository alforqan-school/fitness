function selectCoach(selectedCard) {
    // Remove 'selected' from all cards
    document.querySelectorAll('.cube-card').forEach(card => card.classList.remove('selected'));
  
    // Add 'selected' to the clicked card
    selectedCard.classList.add('selected');
  }
  