package mk.fink.ukim.quickbite.entites;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class MenuItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    double price;
    @ManyToMany
    List<Ingredient> ingredients;
    @ManyToMany
    List<MenuImages> images;
    @ManyToOne
    Category category;

    public MenuItem(String name, Double price, List<Ingredient> ingredientsList, Category category, List<MenuImages> images) {
        this.name = name;
        this.price = price;
        this.ingredients = ingredientsList;
        this.category = category;
        this.images = images;
    }
}
