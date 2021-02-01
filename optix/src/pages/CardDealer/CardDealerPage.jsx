import React from 'react';

import { DECK_SIZE, getOrderedDeck } from '../../util/constants';
import { ButtonSection, CardDeckSection, CardTableSection, CardTableHeader, DeckCount, MainContainer } from './CardDealerPageStyles';
import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';
import H1 from '../../components/H1';
import PlayingCard from '../../components/PlayingCard';

/**
 * 	Poker game is limited to 5 cards being dealt (face down until clicked).
 * 	The full logic of the card dealing sequence for 5-card poker is not implemented.
 */
class CardDealerPage extends React.Component {
	constructor(props) {
		super(props);

		const allCards = getOrderedDeck();

		this.state = {
			cards: allCards,
			currentCard: 0,
			dealtCards: [],
			stopShuffle: false
		}
	}

	dealFromDeck = () => {
		const { cards, currentCard, dealtCards } = this.state;

		if (currentCard <= 4) {
			const cardToDeal = cards[currentCard];
			const dealtCardsCopy = [...dealtCards];
			dealtCardsCopy.push(cardToDeal)

			this.setState(state => ({
				currentCard: state.currentCard + 1,
				dealtCards: dealtCardsCopy,
				stopShuffle: true
			}));
		}
	}

	getAllCardsInDeck = () => {
		const { cards, currentCard } = this.state;
		return cards.slice(currentCard, cards.length);
	}

	render() {
		const { cards, currentCard, dealtCards, stopShuffle } = this.state;

		const allCardsInDeckIcons = this.getAllCardsInDeck().map(card => (<PlayingCard key={`${card}-deck`} src={`./images/${card}.png`} alt={card} />));
		const dealtCardsIcons = dealtCards.map(card => (<PlayingCard key={`${card}-dealt`} src={`./images/${card}.png`} alt={card} reversed={true} />));

		const isFiveCards = currentCard > 4;

		return (
			<MainContainer>
				<CardTableHeader><H1 fontSize={'7vmin'} fontFamily={'Showtime'}>(5_CARD_POKER)</H1></CardTableHeader>
				<CardTableSection>
					{dealtCardsIcons}
				</CardTableSection>
				<div>
					<ButtonGroup>
						<Button onClick={this.shuffleFullDeck} disabled={stopShuffle ? 'disabled' : false}>SHUFFLE</Button>
						<Button onClick={this.dealFromDeck} disabled={(currentCard === cards.length || isFiveCards) ? 'disabled' : false}>DEAL</Button>
						<Button onClick={this.resetDeck}>RESET DECK</Button>
					</ButtonGroup>
				</div>
				<CardDeckSection>
					{allCardsInDeckIcons}
				</CardDeckSection>
				<DeckCount>{`Dealer's Deck (${cards.length - (currentCard)})`}</DeckCount>
			</MainContainer>
		);
	}

	resetDeck = () => {
		const orderedDeck = getOrderedDeck();

		this.setState({
			cards: orderedDeck,
			currentCard: 0,
			stopShuffle: false,
			dealtCards: []
		});
	}

	// Uses Fisher–Yates shuffle algorithm: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
	shuffleFullDeck = () => {
		const { cards, currentCard } = this.state;
		if (currentCard === 0) {
			let numCards = DECK_SIZE;
			let temp, index;

			while (numCards > 0) {
				// Pick a remaining card
				index = Math.floor(Math.random() * numCards--);
				// And swap it with the current card
				temp = cards[numCards];
				cards[numCards] = cards[index];
				cards[index] = temp;
			}

			this.setState({
				cards,
				stopShuffle: false
			});
		}
		return;
	}
}

export default CardDealerPage;