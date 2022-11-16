import React from "react";
import {useState} from "react";
import PricingCard from "./PricingCard/PricingCard";

//Style
import "./Pricing.scss";

//Data
import {pricingCards} from "../../data/data";

const Pricing = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<section className="pricing">
			<div className="container">
				<div className="pricing__header">
					<h1 className="pricing__header-title">Our Pricing</h1>

					<div className="billing">
						<span className="billing__annually">Annually</span>

						<label className="switch">
							<input className="switch__input" type="checkbox" onClick={() => setIsChecked(!isChecked)} />
							<span className="switch__slider"></span>
						</label>

						<span className="billing__monthly">Monthly</span>
					</div>
				</div>

				<div className="pricing__content">
					{pricingCards.map((card) => (
						<PricingCard key={card.id} cardClass={`card card-${card.id}`} isChecked={isChecked} plan={card.plan} monthPrice={card.monthPrice} annualPrice={card.annualPrice} features={card.features} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
