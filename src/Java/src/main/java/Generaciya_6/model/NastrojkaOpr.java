package Generaciya_6.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Generaciya_6.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: НастройкаОпр
 */
@Entity(name = "IISGeneraciya_6НастройкаОпр")
@Table(schema = "public", name = "НастройкаОпр")
public class NastrojkaOpr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Opros")
    @Convert("Opros")
    @Column(name = "Опрос", length = 16, unique = true, nullable = false)
    private UUID _oprosid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Opros", insertable = false, updatable = false)
    private Opros opros;

    @OneToMany(mappedBy = "nastrojkaopr", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<soderzhanie> soderzhanies;


    public NastrojkaOpr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}