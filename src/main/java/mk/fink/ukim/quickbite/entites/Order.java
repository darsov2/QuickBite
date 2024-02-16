package mk.fink.ukim.quickbite.entites;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import mk.fink.ukim.quickbite.entites.enums.OrderStatus;
import mk.fink.ukim.quickbite.entites.enums.OrderType;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany
    private List<CartItem> orderItems;
    @Enumerated(value = EnumType.STRING)
    private OrderStatus orderStatus;
    @OneToOne
    private RestaurantTable restaurantTable;
    @Enumerated(value = EnumType.STRING)
    private OrderType orderType;
    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm")
    private LocalDateTime created;
    private String name;


    public Order(List<CartItem> orderItems, OrderStatus orderStatus, RestaurantTable restaurantTable, OrderType orderType, LocalDateTime created, String name) {
        this.orderItems = orderItems;
        this.orderStatus = orderStatus;
        this.restaurantTable = restaurantTable;
        this.orderType = orderType;
        this.created = created;
        this.name = name;
    }
}
