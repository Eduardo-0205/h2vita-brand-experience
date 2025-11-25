import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { ScaleOnHover } from "@/components/animations/ScaleOnHover";
import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  color: "focus" | "relax" | "immunity" | "glow";
  image: string;
  href: string;
}

const colorClasses = {
  focus: "bg-focus-light border-focus/20",
  relax: "bg-relax-light border-relax/20",
  immunity: "bg-immunity-light border-immunity/20",
  glow: "bg-glow-light border-glow/20",
};

const textColorClasses = {
  focus: "text-focus-foreground",
  relax: "text-relax-foreground",
  immunity: "text-immunity-foreground",
  glow: "text-glow-foreground",
};

const ProductCard = ({ name, tagline, description, color, image, href }: ProductCardProps) => {
  return (
    <ScaleOnHover scale={1.02}>
      <Card className={`${colorClasses[color]} border overflow-hidden group hover:shadow-lg transition-shadow duration-300`}>
        <div className="aspect-square relative overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        <div className="p-6">
          <h3 className={`font-display text-2xl font-medium mb-2 ${textColorClasses[color]}`}>
            {name}
          </h3>
          <p className="text-sm font-medium text-foreground/70 mb-3">{tagline}</p>
          <p className="text-sm text-foreground/60 mb-4 line-clamp-2">{description}</p>
          <Button
            asChild
            variant="ghost"
            className="group/btn p-0 h-auto hover:bg-transparent"
          >
            <Link to={href} className="flex items-center gap-2 text-sm font-medium">
              Descobrir
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </Card>
    </ScaleOnHover>
  );
};

export default ProductCard;
