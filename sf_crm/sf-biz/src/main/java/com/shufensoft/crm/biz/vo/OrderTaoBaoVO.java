package com.shufensoft.crm.biz.vo;

import com.shufensoft.crm.biz.domain.generation.trade.OrderTaoBao;
import lombok.Data;

import java.util.Date;

/**
 *   
 *  @ProjectName: sf-crm 
 *  @Description: <p></p>
 *  @author chenyong  chenyong@suniusoft.com
 *  @date 2015/7/14  
 */
@Data
public class OrderTaoBaoVO extends OrderTaoBao {
    /**
     * 开始时间
     */
    private Date startDate;
    /**
     * 结束时间
     */
    private Date  endDate;

}
