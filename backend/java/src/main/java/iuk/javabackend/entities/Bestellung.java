package iuk.javabackend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "bestellung")
public class Bestellung {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private int id;

    @ManyToOne(optional = false)
    @JoinColumn(nullable = false, name = "kunde")
    private Kunde kunde;

    @ManyToOne(optional = false)
    @JoinColumn(nullable = false, name = "lieferart")
    private Lieferart lieferart;

    @ManyToOne(optional = false)
    @JoinColumn(nullable = false, name = "zahlungsart")
    private Zahlungsart zahlungsart;

    @ManyToOne(optional = false)
    @JoinColumn(nullable = false, name = "mitarbeiter")
    private Mitarbeiter mitarbeiter;
}
