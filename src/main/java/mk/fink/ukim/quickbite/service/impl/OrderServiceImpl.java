package mk.fink.ukim.quickbite.service.impl;

import jakarta.persistence.Table;
import mk.fink.ukim.quickbite.entites.*;
import mk.fink.ukim.quickbite.entites.enums.OrderStatus;
import mk.fink.ukim.quickbite.entites.enums.OrderType;
import mk.fink.ukim.quickbite.repository.*;
import mk.fink.ukim.quickbite.service.OrderService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final CartItemRepository cartItemRepository;
    private final RestaurantsRepository restaurantsRepository;
    private final TableRepository tableRepository;
    private final UserRepository userRepository;

    OrderServiceImpl(OrderRepository orderRepository, CartItemRepository cartItemRepository, RestaurantsRepository restaurantsRepository,
                     TableRepository tableRepository, UserRepository userRepository){
        this.orderRepository = orderRepository;
        this.cartItemRepository = cartItemRepository;
        this.restaurantsRepository = restaurantsRepository;
        this.tableRepository = tableRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<Order> findAll(){
        return orderRepository.findAll();
    }

    @Override
    public Optional<Order> findById(Long id){
        return orderRepository.findById(id);
    }

    @Override
    public Optional<Order> saveOrder(Long id,
                                     String cartItems,
                                     OrderStatus orderStatus,
                                     Long restaurantTableId,
                                     OrderType orderType,
                                     LocalDateTime creationDate,
                                     String name){


        List<CartItem> cartItemList = Arrays.stream(cartItems.split(","))
                .map(x->cartItemRepository.findById(Long.parseLong(x)).get()).toList();
        RestaurantTable restaurantTable = tableRepository.findById(restaurantTableId).get();


        Order order = new Order();
//        cartItemList, orderStatus, restaurantTable, orderType, creationDate, user
        if(id != null){
            order = orderRepository.findById(id).get();
        }

        order.setOrderItems(cartItemList);
        order.setOrderStatus(orderStatus);
        order.setRestaurantTable(restaurantTable);
        order.setOrderType(orderType);
        order.setCreated(creationDate);
        order.setName(name);

        orderRepository.save(order);

        return Optional.of(order);
    }

    @Override
    public void deleteById(Long id){
        Order order = orderRepository.findById(id).get();
        orderRepository.delete(order);
    }


}
