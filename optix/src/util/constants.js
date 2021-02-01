export const DECK_SIZE = 52;
export const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
export const CARD_VALUES = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];

export const getOrderedDeck = () => {
	const allCards = [];
	SUITS.forEach(suit => {
		CARD_VALUES.forEach(value => {
			allCards.push(`${value} of ${suit}`);
		});
	});

	return allCards;
};
