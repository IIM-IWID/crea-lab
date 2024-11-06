import React from "react";
import json from "../json/stock.json";
import { CardComponent } from "../components/card";
const Stock = () => {
  return (
    <main className="p-6">
      <div className="grid grid-cols-4 gap-4">
        {json.cards.map((element: any) => (
          <CardComponent
            title={element.title}
            description={element.description}
            stock={element.stock}
          />
        ))}
      </div>
    </main>
  );
};

export default Stock;
