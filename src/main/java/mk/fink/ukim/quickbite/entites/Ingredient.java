package mk.fink.ukim.quickbite.entites;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double weight;
    private Double kcal;
    private Double singlePrice;

    public Ingredient(String name, Double weight, Double kcal, Double singlePrice) {
        this.name = name;
        this.weight = weight;
        this.kcal = kcal;
        this.singlePrice = singlePrice;
    }
}
