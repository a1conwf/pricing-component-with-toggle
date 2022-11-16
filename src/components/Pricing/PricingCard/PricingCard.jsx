import React from "react";

//Style
import "./PricingCard.scss";

const PricingCard = ({plan, monthPrice, cardClass, annualPrice, isChecked, features}) => {
	return (
		<div className={cardClass}>
			<p className="card__plan">{plan}</p>
			<p className="card__price">{isChecked ? annualPrice : monthPrice}</p>
			<ul className="card__features">
				{features.map((feature) => (
					<li className="card__features-item" key={feature}>
						{feature}
					</li>
				))}
			</ul>
			<a href="#!" className="btn">
				Learn more
			</a>
		</div>
	);
};

export default PricingCard;
