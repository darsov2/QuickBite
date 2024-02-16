package mk.fink.ukim.quickbite.entites;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private MenuItem menuItem;
    private Integer quantity;

    public CartItem(MenuItem menuItem, Integer quantity) {
        this.menuItem = menuItem;
        this.quantity = quantity;
    }
}
