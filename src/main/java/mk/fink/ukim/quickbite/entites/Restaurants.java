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
public class Restaurants {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String city;
    private String zipCode;
    private String address;
    private String description;
    private Double longitude;
    private Double latitude;

    public Restaurants(String city, String zipCode, String address, String description, Double longitude, Double latitude) {
        this.city = city;
        this.zipCode = zipCode;
        this.description = description;
        this.longitude = longitude;
        this.latitude = latitude;
        this.address = address;
    }
}
