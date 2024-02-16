package mk.fink.ukim.quickbite.service;

import mk.fink.ukim.quickbite.entites.Order;
import mk.fink.ukim.quickbite.entites.enums.OrderStatus;
import mk.fink.ukim.quickbite.entites.enums.OrderType;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface OrderService {
    List<Order> findAll();
    Optional<Order> findById(Long id);
    Optional<Order> saveOrder(Long id,
                              String cartItems,
                              OrderStatus orderStatus,
                              Long restaurantTableId,
                              OrderType orderType,
                              LocalDateTime creationDate,
                              String name);
    void deleteById(Long id);
}
