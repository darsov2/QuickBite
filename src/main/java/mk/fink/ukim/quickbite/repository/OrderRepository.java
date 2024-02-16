package mk.fink.ukim.quickbite.repository;

import mk.fink.ukim.quickbite.entites.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
}
