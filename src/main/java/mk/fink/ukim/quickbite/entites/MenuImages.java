package mk.fink.ukim.quickbite.entites;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class MenuImages {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String imageUrl;

    public MenuImages(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
