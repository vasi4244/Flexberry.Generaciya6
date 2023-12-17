package Generaciya_6.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Generaciya_6.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Сотрудники
 */
@Entity(name = "IISGeneraciya_6Сотрудники")
@Table(schema = "public", name = "Сотрудники")
public class Sotrudniki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "имя")
    private String имя;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Spisok")
    @Convert("Spisok")
    @Column(name = "Список", length = 16, unique = true, nullable = false)
    private UUID _spisokid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Spisok", insertable = false, updatable = false)
    private Spisok spisok;


    public Sotrudniki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getимя() {
      return имя;
    }

    public void setимя(String имя) {
      this.имя = имя;
    }


}