import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";

interface DishCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  votes?: number;
  onVote?: () => void;
}

const DishCard = ({ image, title, description, price, votes, onVote }: DishCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [localVotes, setLocalVotes] = useState(votes || 0);

  const handleVote = () => {
    if (!isLiked) {
      setLocalVotes((prev) => prev + 1);
      setIsLiked(true);
      onVote?.();
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-[var(--shadow-warm)] group">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {votes !== undefined && (
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-3 right-3 rounded-full shadow-lg"
            onClick={handleVote}
          >
            <Heart
              className={`h-5 w-5 transition-colors ${
                isLiked ? "fill-highlight text-highlight" : ""
              }`}
            />
          </Button>
        )}
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{price}</span>
          {votes !== undefined && (
            <span className="text-sm text-muted-foreground">{localVotes} голосов</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DishCard;
