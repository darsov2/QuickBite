package mk.fink.ukim.quickbite.repository;

import mk.fink.ukim.quickbite.entites.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {

}
