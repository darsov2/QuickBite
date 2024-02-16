package mk.fink.ukim.quickbite.entites;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor

public class RestaurantTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    @ManyToOne
    private Restaurants restaurants;

    public RestaurantTable(String description, Restaurants restaurants){
        this.description = description;
        this.restaurants = restaurants;

    }
}
